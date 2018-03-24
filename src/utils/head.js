function setTitle(text) {
    document.title = text;
}

function newElement({ tag, attributesMap }) {
    const element = document.createElement(tag)

    Object.entries(attributesMap).forEach(([key, value]) => {
        element.setAttribute(key, value)
    })

    return element
}

function setMeta({ name, property, content }) {
    const existingMeta = document.head.querySelector(`meta[${name || property}=${name}]`)
    const propertyMeta = document.head.querySelector(`meta[property=${name}]`)

    if (nameMeta) {
        nameMeta.setAttribute('content', content)
    } else {
        document.head.appendChild(newElement({
            tag: name ? 'name' : property ? 'property' : '',
            attributesMap: {
                name,
                content
            }
        }))
    }
}

export {setTitle}
export {setMeta}