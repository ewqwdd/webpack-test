import { classNames } from 'shared/lib/classname'
import styles from './Modal.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react'
import Portal from 'shared/ui/Portal/Portal'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    className?: string
}

const ANIMATION_DELAY = 100

export default function Modal({ children, isOpen, onClose, className }: ModalProps) {
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const timer = useRef<ReturnType <typeof setTimeout>>()

    const mods: Record<string, boolean> = {
        [styles.open]: isOpen,
        [styles.isClosing]: isClosing
    }

    const stopProp = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const handleClose = useCallback(() => {
        setIsClosing(true)
        timer.current = setTimeout(() => {
            onClose()
            setIsClosing(false)
        }, ANIMATION_DELAY)
    }, [onClose, setIsClosing])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose()
        }
    }, [handleClose])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timer.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={handleClose}>
                    <div className={styles.content} onClick={stopProp}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
};
