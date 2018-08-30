$(function() {
    $('.detail-save').on('click', function(e) {
        let id = $('#detail').attr('data-id')
        let newObj = {
            name: $('.detail-title').val(),
            description: $('.detail-description').val(),
            content: $('.detail-content').val(),
            attached: [],
            visible: true
        }

        saveItem(id, newObj)
            .then(() => {
                toast('Saved!')
            })
            .catch(error => {
                toast(error, true)
            })
    })
})
