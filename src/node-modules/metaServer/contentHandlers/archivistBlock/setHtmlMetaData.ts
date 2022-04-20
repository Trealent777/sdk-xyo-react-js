import { XyoArchivistApi, XyoPayloadWrapper } from '@xyo-network/sdk-xyo-client-js'
import { Meta, metaBuilder } from '@xyo-network/sdk-xyo-js'
import cloneDeep from 'lodash/cloneDeep'

import { getArchiveFromUri, getArchivistDomainFromExploreUri, getDomainFromUri, getHashFromUri, isExploreDomain } from '../../lib'

const isLocalhost = (domain: string) => {
  return domain.startsWith('http://localhost') || domain.startsWith('http://127.0.0.1')
}

const isValidDomain = (domain: string) => {
  return isExploreDomain(domain) || isLocalhost(domain)
}

export const setHtmlMetaData = async (path: string, html: string, config: Meta) => {
  const hash = getHashFromUri(path)
  const domain = getDomainFromUri(path)
  const apiDomain = getArchivistDomainFromExploreUri(path)
  const archive = getArchiveFromUri(path)

  const meta = cloneDeep(config)
  meta.og = { ...meta.og, url: path }

  if (hash && isValidDomain(domain) && apiDomain && archive) {
    const api = new XyoArchivistApi({ apiDomain })
    // TODO: We're only getting payloads, handle bound witnesses
    const blocks = await api.archive(archive).payload.hash(hash).get()
    if (blocks && blocks.length > 0) {
      const wrapper = new XyoPayloadWrapper(blocks[0])
      const hash = wrapper.sortedHash()
      meta.title = `XYO 2.0: Block | ${hash}`
      meta.description = `A XYO 2.0 ${wrapper.body.schema} block with the hash "${hash}".`
      meta.og = { ...meta.og, title: meta.title } as typeof meta.og
      meta.twitter = { ...meta.twitter, title: meta.title }
    }
  }

  return metaBuilder(html, meta)
}