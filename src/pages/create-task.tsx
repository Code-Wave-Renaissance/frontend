import type { NextPage } from "next";
import Head from "next/head";
import { CreateTasksView } from "../views";

const CreateTask: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>TaskFlow</title>
                <meta
                    name="description"
                    content="Create Task"
                />
            </Head>
            <CreateTasksView />
        </div>
    );
}

export default CreateTask;