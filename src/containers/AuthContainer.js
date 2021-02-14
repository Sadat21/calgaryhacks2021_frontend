import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAuth, getDb } from '../lib/Firebase';
import {
    resetUserAction,
    updateUserFieldsAction,
    updateUserIdAction,
} from '../redux/actions/UserActions';
import { DB_COLLECTION_USERS } from '../lib/Constants';
import { ROUTE_CONSTANTS} from '../lib/Routes';

const AuthContainer = (props) => {
    const dispatch = useDispatch();

    const userId = useSelector((state) => {
        return state.userReducer.uid;
    });

    useEffect(() => {
        const subscription = getAuth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(updateUserIdAction(user.uid));
            } else {
                dispatch(resetUserAction());
            }
        });

        return () => {
            return subscription();
        };
    }, [dispatch]);

    useEffect(() => {
        if (userId) {
            const unsubscribe = getDb()
                .collection(DB_COLLECTION_USERS)
                .doc(userId)
                .onSnapshot(
                    (doc) => {
                        dispatch(updateUserFieldsAction(doc.data()));
                    },
                    () => {
                        dispatch(resetUserAction());
                    },
                );

            return () => {
                return unsubscribe();
            };
        }
    }, [dispatch, userId]);
/*
    useEffect(() => {
        if (!userId && props.location.pathname !== ROUTE_CONSTANTS.RESTAURANT) {
            props.history.push(ROUTE_CONSTANTS.LOGIN);
        } else if (userId && props.location.pathname === ROUTE_CONSTANTS.LOGIN) {
            props.history.push("/");
        }
    }, [props.history, props.location.pathname, userId]);
*/
    return <div id={'AuthContainer'} />;
};

export default withRouter(AuthContainer);
