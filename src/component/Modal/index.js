import React ,{useRef,useEffect,useCallback} from 'react'
import { useSpring, animated } from 'react-spring';
import {Background,ModalWrapper,ModalContent,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text,CloseModalButton} from './ModalElements'
const Modal = ({showModal,setShowModal}) => {
    const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      };
    
      const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
            console.log('I pressed');
          }
        },
        [setShowModal, showModal]
      );

      useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );
    return (
        <>
          {showModal ? (
              <Background onClick={closeModal} ref={modalRef}>
                  <animated.div style={animation}>
                  <ModalWrapper>
                      <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Contact</FormH1>
                            <FormLabel  htmlFor="email">Email</FormLabel>
                            <FormInput placeholder='Type Your Email' type="email" required />
                            <FormLabel htmlFor="password">Message</FormLabel>
                            <FormInput placeholder='Type Your Message' type="password" required />
                            <FormButton type="submit">Send</FormButton>
                            
                        </Form>
                    </FormContent>
                </FormWrap>
                      <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
                  </ModalWrapper>
                  </animated.div>
              </Background>
          ):null}  
        </>
    )
}

export default Modal
