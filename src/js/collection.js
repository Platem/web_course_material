const CollecItem = (id, title, content) => {
    let $item = $('<div class="collection-item"></div>'),
        $title = $('<div class="collection-item-title"></div>'),
        $content = $('<div class="collection-item-content"></div>')

    $item.attr('id', id)

    $title.text(title)
    $item.append($title)

    $content.text(content)
    $item.append($content)

    return $item
}
