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
