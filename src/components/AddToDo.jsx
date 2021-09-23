
import Button from './Button'


const AddTodo = ( { addTodo } ) => {
    return (
        <div className="add-todo">
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{
                            border: 'none'
                        }}>
                            <h1 className="modal-title" id="exampleModalLabel">New Todo</h1>
                        </div>
                        <div className="modal-body">
                            <p>Please write content of todo in input below!</p>
                            <form className="row g-3 needs-validation" noValidate>
                                <input type="text" value={addTodo} placeholder="Do something!" required id="validationCustom01" />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer" style={{
                            border: 'none'
                        }}>
                            <Button value="Cancel" myStyle="cancel" />
                            <Button value="Add" myStyle="add" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo