import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";

import React from "react";
import { ClipLoader } from "react-spinners";

const UserView = () => {
    const router = useRouter();
    const { userId } = router.query;

    // const { data: fetchedUser, isLoading } = useUser(userId as string);

    // if (isLoading || !fetchedUser) {
    //     return (
    //         <div className="flex justify-center items-center h-full">
    //             <ClipLoader color="lightblue" size={80} />
    //         </div>
    //     )
    // }

    return (
        <>
            <Header showBackArrow label="User profile"/>
        </>
    );
}

export default UserView;