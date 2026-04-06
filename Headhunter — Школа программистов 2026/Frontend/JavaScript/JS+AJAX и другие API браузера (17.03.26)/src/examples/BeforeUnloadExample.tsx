import {useEffect} from 'react';

export const BeforeUnloadExample = () => {
    useEffect(() => {

        const handleBeforeUnloadWithFetch = () => {
            fetch('http://localhost:8000/analytics/slow?from=fetch', { method: 'POST' })
        }

        const handleBeforeUnloadWithBeacon = () => {
            navigator.sendBeacon('http://localhost:8000/analytics/slow?from=beacon')
        }

        // fetch отменится — браузер не даёт выполнять async операции в beforeunload
        window.addEventListener('beforeunload', handleBeforeUnloadWithFetch)

        // beacon гарантированно уйдёт
        window.addEventListener('beforeunload', handleBeforeUnloadWithBeacon)

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnloadWithFetch)
            window.removeEventListener('beforeunload', handleBeforeUnloadWithBeacon)
        }
    }, [])

    return null;
}
