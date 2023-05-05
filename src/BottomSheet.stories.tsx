import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import BottomSheet from './BottomSheet';

const meta: Meta<typeof BottomSheet> = {
  title: 'Bottom Sheet',
  component: BottomSheet,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: '모달 내용은 여기에 표시됩니다!!',
  },

  argTypes: {
    setOpen: { action: 'clicked!!' },
  },
};

const ModalWithButton = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setOpen(true)}>열기</button>
      <BottomSheet
        open={open}
        setOpen={setOpen}
      >
        열었습니다!!
      </BottomSheet>
    </>
  );
};

export const ExampleWithOpenButton: Story = {
  render: () => <ModalWithButton />
};
