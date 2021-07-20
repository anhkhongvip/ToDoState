type AddTodo = (newTodo : Object) => void;
type SendEditTodo = (sendEditTodo : itemsObject) => void;
type CheckEdit = (checkEdit : boolean) => void;
type RemoveItem = (removeItem : String) => void;
type itemsObject = {
    id : string,
    email : string;
    fullname : string;
    age : string;
}
