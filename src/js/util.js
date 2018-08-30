function fetchAllItems() {
    let list = []

    let db = firebase.firestore()
    return db.collection("materials")
        .where('visible', '==', true)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => list.push({
                id: doc.id,
                data: doc.data()
            }))
            return list
        })
}

function saveItem(id, object) {
    let db = firebase.firestore()

    return db.collection("materials")
        .doc(id)
        .set(object)
}

function toast(message, danger) {
    let $toast = $('<div class="toast hide">' + message + '</div>')
    if (danger) $toast.addClass('danger')
    $('.toaster').append($toast)

    setTimeout(() => {
        $toast.removeClass('hide')
    }, 50)

    setTimeout(() => {
        $toast.addClass('hide')

        setTimeout(() => {
            $toast.remove()
        }, 500)
    }, 2000)
}
