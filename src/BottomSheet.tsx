import { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div<{ open: boolean }>`
display: ${({ open }) => open ? 'block' : 'none'}
`;

const Backdrop = styled.div`
position: fixed;
left: 0;
top: 0;

width: 100%;
height: 100%;

background-color: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
position: fixed;
left: 50%;
bottom: 0;
transform: translate(-50%, 0);

display: flex;
justify-content: center;
align-items: center;

width: 50%;
min-width: 375px;
min-height: 227px;

background-color: #FDFDFD;
border-radius: 5px 5px 0px 0px;
`;

interface BottomSheetProps extends PropsWithChildren {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const BottomSheet = (props: BottomSheetProps) => {
  const { children, open, setOpen } = props;

  const closeWithEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false);
  }

  const setCloseEventListener = () => {
    if (!open) return;

    window.addEventListener('keyup', closeWithEsc);

    return () => { window.removeEventListener('keyup', closeWithEsc) };
  };

  useEffect(setCloseEventListener, [open]);

  return (
    <Modal open={open} aria-modal={open}>
      <Backdrop onClick={() => setOpen(false)}></Backdrop>
      <Container>
        {children}
      </Container>
    </Modal>
  );
}

export default BottomSheet;
