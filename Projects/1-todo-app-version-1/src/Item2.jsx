function Item2() {
    let name = "Become Gay"
    let date = "14/06/2024"
    return (
        <div class="container">
            <div class="row my-row">
                <div class="col-6">
                    {name}
                </div>
                <div class="col-4">
                    {date}
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger my-button">Delete</button>
                </div>
            </div>
        </div>
    );
}
export default Item2