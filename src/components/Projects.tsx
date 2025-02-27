import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

function Projects() {
  return (
    <div className="w-full flex flex-col p-12">
      <div className="m-4">Projects</div>
      <Accordion type="single" collapsible className=" m-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Project 1</AccordionTrigger>
          <AccordionContent className="flex">
            <div>Screenshot</div>
            <div>Description</div>
          </AccordionContent>
          <div className="flex">
            <div>Live link</div>
            <div>Github repo</div>
          </div>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Project 1</AccordionTrigger>
          <AccordionContent className="flex">
            <div>Screenshot</div>
            <div>Description</div>
          </AccordionContent>
          <div className="flex">
            <div>Live link</div>
            <div>Github repo</div>
          </div>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Project 1</AccordionTrigger>
          <AccordionContent className="flex">
            <div>Screenshot</div>
            <div>Description</div>
          </AccordionContent>
          <div className="flex">
            <div>Live link</div>
            <div>Github repo</div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Projects
