"use client" // this tells Next to make it a client component
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export default function MainPage() {
    const [mailValue, setMailValue] = useState<string>(''); // initialize as empty string
    const [password, setPassword] = useState<string>(''); // NEW
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email); // NEW

    const onChangeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMailValue(event.target.value);
    }

    useEffect(() => {
        if (mailValue && isValidEmail(mailValue) && password !== '') {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [mailValue, password]); // added password dependency

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 20
            }}
        >
            <h1 style={{ marginBottom: '30px', fontSize: '30px' }}>
                Submit your data
            </h1>

            <TextField
                style={{ height: '30px', width: '300px', marginBottom: '30px' }}
                onChange={onChangeMail}
                value={mailValue || ''}
                error={mailValue !== undefined && !isValidEmail(mailValue)}
                helperText={
                    mailValue !== undefined && !isValidEmail(mailValue)
                        ? 'Invalid email address'
                        : 'email'
                }
            />

            <TextField
                style={{ height: '30px', width: '300px', marginBottom: '30px' }}
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                variant='contained'
                color="primary"
                style={{
                    color: isButtonDisabled ? 'black' : 'white',
                    backgroundColor: isButtonDisabled ? 'grey' : 'blue',
                    marginBottom: '30px'
                }}
                disabled={isButtonDisabled}
                onClick={() => setSubmitted(true)}
            >
                Submit
            </Button>
            {submitted && <p>Succesfully submitted!</p>}
        </div>
    );
}