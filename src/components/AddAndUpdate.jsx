import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  Name: Yup.string().required("Name is Required"),
  Email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddAndUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "Contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "Contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  Name: contact.Name,
                  Email: contact.Email,
                }
              : {
                  Name: "",
                  Email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) 
            : addContact(values);
          }}
        >
          <Form className = "flex flex-col gap-4">
            <div className = "flex flex-col gap-1">
              <label htmlFor = "Name">Name</label>
              <Field name = "Name" className="h-10 border text-black px-2" />
              <div className=" text-xs text-white">
                <ErrorMessage name = "Name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor = "Email">Email</label>
              <Field name = "Email" className="h-10 border text-black px-2" />
              <div className=" text-xs text-white">
                <ErrorMessage name = "Email" />
              </div>
            </div>

            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 border border-transparent rounded-md self-end font-semibold transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-indigo-500 hover:border-white hover:shadow-lg">
               {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;