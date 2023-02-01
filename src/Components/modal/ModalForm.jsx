import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Modal,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormuPost from "../FormuPost/FormuPost";

const ModalForm = (props) => {
  console.log("estas son las props del children", props.children);

  return (
    <>
      <Modal isOpen={props.isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.children.props.tittle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{props.children}</ModalBody>
          <ModalFooter>
            <Button onClick={() => props.close()}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalForm;
