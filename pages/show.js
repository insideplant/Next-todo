import {withRouter} from 'next/router'

const Page = withRouter((props) => (
    <h1>{props.router.query.title}</h1>
))

export default Page