import { createPortal } from 'react-dom'

interface PortalProps {
    children: React.ReactNode
    element?: HTMLElement
}

export default function Portal({ children, element = document.body }: PortalProps) {
    return createPortal(children, element)
};
