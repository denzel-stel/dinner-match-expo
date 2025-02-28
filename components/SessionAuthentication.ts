import { ReactNode, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import axios from "../controllers/qaxios";
import { Session, useStytch, useStytchSession, useStytchUser } from "@stytch/react-native";
import AsyncStorageService from "@/services/AsyncStorageService";
import api from "@/controllers/axios";
import { router } from "expo-router";

const SessionAuthentication = ({ children }: { children: ReactNode }) => {
    const stytch = useStytch();
    const tokens = stytch.session?.getTokens();
    
    stytch.session?.onChange((sess: Session | null) => {
      if (sess == null)  {
        onSessionEnd();
      }
      else {
        router.navigate("/(app)/(tabs)");
        if (tokens) {
          AsyncStorageService.saveToken(tokens.session_jwt);

          // Set authentication header when 
          api.defaults.headers.common['Authorization'] = `Bearer ${tokens.session_jwt}`
        }
      }
    })

    const onSessionEnd = async () => {
        router.navigate("/login");
    }
    return (children);
}
export default SessionAuthentication;