import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {

  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "Contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key = {contact.id}
        className="flex items-center justify-between rounded-lg bg-blue-900 p-2 text-slate-50">
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-4xl"/>
          <div className="">
            <h2 className="font-medium">{contact.Name}</h2>
            <p className="text-sm">{contact.Email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose} contact={contact} isUpdate />
    </>
  );
};

export default ContactCard;