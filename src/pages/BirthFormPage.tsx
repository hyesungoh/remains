
import { useStorage } from "@plasmohq/storage/hook";


import { useState } from "react";
import BlurText from "~components/BlureText";
import { Button } from "~components/Button";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "~components/Dialog";
import { Input } from "~components/Input";
import { useBirth } from "~hooks/useBirth";

export default function BirthFormPage() {
  const [, setBirth] = useBirth();

  const [innerBirth, setInnerBirth] = useState('');
  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const birth = e.target.value;
    setInnerBirth(birth);
  }

  const isAvailableBirth = innerBirth.length >= 6;
  
  const onClickSubmit = () => {
    if (!isAvailableBirth) return;
    setBirth(innerBirth);
  }

  return <div className="flex flex-col items-center justify-center h-full">
    <BlurText
      text="Enter your birthdate"
      delay={150}
      animateBy="words"
      direction='bottom'
      className="text-2xl mb-8 text-white"
    />

    <div className="flex gap-4">
      <Input type='date' className='w-40' onChange={onChangeBirth} value={innerBirth} />

      <Dialog>
        <DialogTrigger>
          <Button variant='secondary' disabled={!isAvailableBirth}>
            Submit
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Confirm your birthdate</DialogTitle>
          <DialogDescription>
            {innerBirth}
          </DialogDescription>
          <DialogFooter>
            <Button onClick={onClickSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
}
