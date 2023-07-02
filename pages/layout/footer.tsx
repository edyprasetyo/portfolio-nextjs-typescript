import type { NextPage } from 'next';
import requestIp from 'request-ip';
import { db } from '../../lib/db';

export const getServerSideProps = async ({ req }: any) => {
    const detectedIp = requestIp.getClientIp(req)
    const list = await db.visitor.findMany();
    return { props: { list } };
};

const Footer: NextPage = () => {
    return (
        <div>
            <div className="h6 text-green text-center pt-5 pb-4">
                <span className="text-white">Visitors :</span> 100
            </div>
        </div>
    )
}

export default Footer
