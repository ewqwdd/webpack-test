import { Loader } from 'shared/ui/Loader'
import styles from './PageLoading.module.scss'

export default function PageLoading() {
    return (
        <div className={styles.pageLoading}>
            <Loader />
        </div>
    )
};
