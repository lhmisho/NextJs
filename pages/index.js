import Link from "next/link";
import Layout from '../comps/MyLayout'

// dynamic link
// const PostLink = props =>(
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );

// export default function Blog(){
//     return(
//         <Layout>
//             <h1>Hello Next</h1>
//             <ul>
//                 <PostLink title="Hello Next.js" />
//                 <PostLink title="Next js is awsm" />
//                 <PostLink title="Display apps with zeit" />
//             </ul>
//         </Layout>
//     )
// }

// export default function Index() {
//     return (
//       <div>
//         <Layout>
//             <p>Hello next js</p>
//         </Layout>
//       </div>
//     );
//   }

const PostLink = props =>(
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

export default function Blog(){
    return(
        <Layout>
            <h1>Hello Next</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>
    )
}




