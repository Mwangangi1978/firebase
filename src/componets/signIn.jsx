import { useState } from "react"
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  /* signOut, */
} from "firebase/auth";
import { Input, FormLabel, FormControl, Button, Box, Text} from "@chakra-ui/react";



export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  /* const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  }; */

    return(
        <> 
            <Box
            
                backgroundSize="cover"
                backgroundPosition="center"
                height="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
            
            >
                <Box
                    p={6}
                    borderRadius="md"
                    boxShadow="md"
                    textAlign="center"
                    width={'50vw'}
                >
                    
                    <>  
                        <Text fontSize={'2xl'} fontStyle={'bold'} marginBottom={'20px'} color={'teal'}>Mwangangi Firebase!</Text>
                        <FormControl id="email" marginBottom={"10px"}>
                            <FormLabel textAlign={"center"}>Email</FormLabel>
                            <Input
                            
                                variant='outline'
                                placeholder="Enter your email"
                                name="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id="password" mt={4} marginBottom={"10px"}>
                            <FormLabel textAlign={"center"}>Password</FormLabel>
                            <Input
                                
                                variant='outline'
                                placeholder="Enter your password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Button mt={3} colorScheme="teal" alignSelf={'center'} onClick={signIn}>
                            Sign in
                        </Button>
                   
                    
                        <Text color="teal" my={3}>or</Text>
                        
                        <Button  onClick={signInWithGoogle}  colorScheme="teal">
                            <Box display= "flex" alignSelf={"center"} >
                                <img src="/google.svg" alt="Google Logo" width={15} height={15}/>
                                <Text ml={2}>Sign in with Google</Text>
                            </Box>
                        </Button>
                    </>
                </Box>
            </Box>
        </>                
    );
}