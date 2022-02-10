import { GetServerSideProps } from "next";

const SlugPage = () => null;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    console.log(context.params);

    return {
        props: {},
    };
};

export default SlugPage;
