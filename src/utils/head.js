function setTitle(text) {
    document.title = text

    document.head.querySelector('meta[name="description"]').setAttribute('content', text)
    document.head.querySelector('meta[name="twitter:description"]').setAttribute('content', text)
    document.head.querySelector('meta[property="og:description"]').setAttribute('content', text)
}

function newElement({ tag, attributesMap }) {
    const element = document.createElement(tag)

    Object.entries(attributesMap).forEach(([key, value]) => {
        element.setAttribute(key, value)
    })

    return element
}

function setMeta({ name, property, content }) {
    const nameMeta = document.head.querySelector(`meta[name=${name}]`)
    const propertyMeta = document.head.querySelector(`meta[property=${property}]`)

    if (nameMeta) {
        nameMeta.setAttribute('content', content)
    } else {
        document.head.appendChild(newElement({
            tag: 'name',
            attributesMap: {
                name,
                content
            }
        }))
    }

    if (propertyMeta) {
        propertyMeta.setAttribute('content', content)
    } else {
        document.head.appendChild(newElement({
            tag: 'property',
            attributesMap: {
                name,
                content
            }
        }))
    }
}

function setCardImage(imageUrl, altText) {
    const og = document.head.querySelector('property[name="og:image"]')
    const twitter = document.head.querySelector('meta[name="twitter:image"]')
    const twitterAltText = document.head.querySelector('meta[name="twitter:image:alt"]')

    og.setAttribute('content', imageUrl)
    twitter.setAttribute('content', imageUrl)
    twitterAltText.setAttribute('content', altText)
}

export { setTitle }
export { setMeta }
export { setCardImage }
