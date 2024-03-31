import styles from './HOC.module.css'

const withHOC = (C, test = 'hello') => {
    console.log(test)
    return test ? ({message}) => <C message={message+ test} /> : C
}

const HocedC = withHOC(({message = 'hello'}) => <div> {message}</div>, null)

export default function MyApp () {
   
    return  (
        <>
            <div className={styles.container}>
                <div className={styles.item}>1</div>
                <div className={styles.item}>2</div>
                <div className={styles.item}>3</div>
                <div className={styles.item}>4</div>
            </div>
            <HocedC message='hello' />
        </>
    )
}

