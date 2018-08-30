const config = {
    apiKey: "AIzaSyB5rN5R7xDYArhvYqU1GQooIdngvhkfRGw",
    authDomain: "web-course-kevs.firebaseapp.com",
    databaseURL: "https://web-course-kevs.firebaseio.com",
    projectId: "web-course-kevs",
    storageBucket: "web-course-kevs.appspot.com",
    messagingSenderId: "574943443907"
}

const MaterialItem = (id, data) => ({
    id: id,
    name: data.name,
    description: data.description,
    content: data.content,
    $item: CollecItem(id, data.name, data.description)
})

let items = [],
    $list

$(function() {
    $('.detail-close').on('click', function(e) {
        $('#detail').removeClass('show')
    })

    $(document).on('click', '.collection-item', function(e) {
        $('#detail').addClass('show')
    })

    $list = $('#list-collection')

    updateList()
})

function updateItems() {
    items = []

    return fetchAllItems()
    .then(itemList => {
        for (let item of itemList) {
            items.push(MaterialItem(item.id, item.data))
        }

        return
    })
}

function updateList() {
    updateItems()
    .then(() => {
        $list.empty()

        for (let item of items) {
            $list.append(item.$item)
        }
    })
}
