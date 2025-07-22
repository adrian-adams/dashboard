import { React, useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader, TextInput, FileInput, Select, Label, Button } from "flowbite-react";
import { addCard } from '../firebase/cardService'
import { collection, getDocs } from "/node_modules/firebase/firestore"

const AddResource = () => {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [tags, setTags] = useState(['']);
    
    // const handleOpenModal = () => setIsModalOpen(true);
    // const handleCloseModal = () => setIsModalOpen(false);

    function onCloseModal() {
        setOpenModal(false);
        setTitle("");
        setUrl("");
        setImageUrl("");
        setTags(['']);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newResource = {title, url, imageUrl, tags: tags.split(',').map(tag => tag.trim()),
        };

        try {
            await addCard(newResource);
            onCloseModal();
        } catch (error) {   
            window.alert('Error adding resource', err)
        }
        // onSubmit(newResource);
        // setTitle("");
        // setUrl("");
        // setImageUrl("");
        // setTags("");
        // onCloseModal();
    };

  return (
    <>
        <button onClick={() => setOpenModal(true)} className="add-button">
            <svg xmlns="http://www.w3.org/2000/svg" width={45} height={45} viewBox="0 0 1024 1024" className="fill-white">
            <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"></path>
            </svg>
        </button>
        <Modal show={openModal} size="md" popup>
            <ModalHeader onClick={onCloseModal} />
            <ModalBody className="m-0 w-full">
                <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add a Resource</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Image */}
                        <div>
                            <Label htmlFor="imageUrl" value="Image URL" />
                            <FileInput id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://example.com/image.jpg" required />
                        </div>
                        {/* Title */}
                        <div>
                            <Label htmlFor="title" value="Title" />
                            <TextInput id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Resource Title" required />
                        </div>
                        {/* Tags */}
                        <div>
                            <div className="pb-2">
                                <Label htmlFor="tags" value="Select a Tag" >Tags</Label>
                            </div>
                            <Select id="tags" value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
                                <option value="">Select a tag</option>
                                {tagOptions.map((tag, index) => (
                                    <option key={index} value={tag}>
                                        {tag}
                                    </option>
                                ))}
                            </Select>
                        </div>
                        {/* URL */}
                        <div>
                            <Label htmlFor="url" value="Resource URL" />
                            <TextInput id="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" required />
                        </div>

                        <div className="w-full">
                            <Button type="sumbit">Add Resource</Button>
                        </div>
                    </form>
                </div>
            </ModalBody>
        </Modal>
    </>
  );
};

export default AddResource;
