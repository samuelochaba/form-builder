import React from "react";
import { Button } from "./ui/button";
import { MdOutlinePublish } from "react-icons/md";

function PublishFormBtn() {
  return (
    <Button className="text-white bg-gradient-to-r gap-2 from-indigo-400">
      <MdOutlinePublish className=" h-4 w-4" />
      Publish
    </Button>
  );
}

export default PublishFormBtn;
