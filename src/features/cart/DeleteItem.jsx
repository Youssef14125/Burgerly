import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ burgerId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(burgerId));
    toast("Removed from cart", { icon: "🗑️" });
  }

  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
