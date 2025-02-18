import React, { useEffect, useState } from 'react';
import { Autocomplete, FormControl, IconButton, InputAdornment, TextField } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { toast } from 'react-toastify';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import zxcvbn from "zxcvbn";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../Services/Api';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';


let check1 = true;

function SignUpPage_new() {
    const type_of_org = [
        { label: 'Farmer group', id: 1 },
    ];

    const fpo_types = [
        { name: "FPO/FPC (Farmer Producer Organisation/Farmer Producer Company)" },
        { name: "PACS (Primary Agriculture Credit Society)" },
        { name: "Co-operatives" },
        { name: "FIG (Farmer Interest Group)" },
        { name: "Individual Proprietors" },
        { name: "Agri Input Dealers" },
        { name: "Others" },
    ];
    const [type_of_organization, setType_of_organization] = useState<{ label: string; id: number; } | null>(null);
    const [fpo_type, setFpo_type] = useState<{ name: string } | null>(null);
    const [checkemail, setCheckEmail] = useState(false);
    const [email1, setEmail1] = useState("");
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [password1, setPassword1] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track if passwords match
    const [mobilecheck, setMobileCheck] = useState("");
    const [mobile, setMobile] = useState("");
    const [nameOfFpo, setNameOfFpo] = useState("");
    const [promoterName, setPromoterName] = useState("");
    const [openOTPPopUP, setOpenOTPPopUP] = useState(false);
    const [timer, setTimer] = useState(30); // 30 seconds countdown
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const [verified, setVerified] = useState(false);
    const [otp, setOtp] = useState("");
    const [otpsent, setOtpSent] = useState(false);
    const [otpverified, setOtpVerified] = useState(false);

    const navigate = useNavigate();

    const handle_type_of_organization = (event: any, newValue: { label: string; id: number; } | null) => {
        setType_of_organization(newValue);
        console.log(newValue);
    };

    const handle_fpo_type = (event: any, newValue: { name: string } | null) => {
        setFpo_type(newValue);
        console.log(newValue);
    };

    useEffect(() => {
        if (otpsent) {
            try {
                const fetchData = async () => {
                    const response = await fetch(`${baseURL}whatsapp/send-otp`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ mobile: mobile })
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data);
                        setVerified(true);
                    }
                }
                fetchData();
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong!");
            }
        }
    }, [otpsent])

    useEffect(() => {
        if (otpverified) {
            try {
                const fetchData = async () => {
                    const response = await fetch(`${baseURL}whatsapp/check-otp`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ mobile: mobile, otp: otp })
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data);
                    }
                }
                fetchData();
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong!");
            }
        }
    }, [otpverified])
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;
        const result = zxcvbn(password);
        setPassword(password);
        checkPasswordsMatch(password, password1); // Check if passwords match
        switch (result.score) {
            case 0:
                setMessage("Password: Very Weak");
                break;
            case 1:
                setMessage("Password: Weak");
                break;
            case 2:
                setMessage("Password: Fair");
                break;
            case 3:
                setMessage("Password: Strong");
                break;
            case 4:
                setMessage("Password: Very Strong");
                break;
            default:
                setMessage("");
                break;
        }
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPassword = event.target.value;
        setPassword1(confirmPassword);
        checkPasswordsMatch(password, confirmPassword); // Check if passwords match
    };

    const checkPasswordsMatch = (password: string, confirmPassword: string) => {
        if (password === confirmPassword) {
            setPasswordsMatch(true); // Passwords match
        } else {
            setPasswordsMatch(false); // Passwords do not match
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const handleClickShowPassword1 = () => {
        setShowPassword1(!showPassword1);
    };

    const handleMouseDownPassword1 = (event: any) => {
        event.preventDefault();
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        setEmail1(emailValue);
        // validateEmail(emailValue);
    };

    const handleMobileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const mobileValue = event.target.value;
        console.log(mobileValue);
    };

    const handleMobileCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const mobileValue = event.target.value;
        if (mobileValue.length === 10) {
            setMobileCheck("");
            setMobile(mobileValue);
        }
        else {
            setMobileCheck("Mobile number should be 10 digits");
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const fpoData = {
            typeOfOrganization: type_of_organization?.label || "",
            nameOfFpo: nameOfFpo,
            typeOfFpo: fpo_type?.name || "",
            dateOfFpo: "", // Not mandatory
            organizationalEmail: email1,
            contactNumber: mobile,
            promoterName: promoterName, // Capture this from an input field
            password: password
        };

        try {
            const response = await fetch(`${baseURL}/fpo`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(fpoData)
            });

            if (response.ok) {
                toast.success("FPO Registered Successfully!");
                navigate("/login"); // Redirect on success
            } else {
                const errorData = await response.json();
                toast.error(errorData.message || "Registration failed!");
            }
        } catch (error) {
            toast.error("Something went wrong!");
        }
    };


    useEffect(() => {
        if (openOTPPopUP) {
            setTimer(30); // Reset timer on opening popup
            setIsResendDisabled(true);
            const interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsResendDisabled(false);
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(interval); // Cleanup timer when popup closes
        }
    }, [openOTPPopUP]);

    const handleResendOTP = () => {
        setIsResendDisabled(true);
        setTimer(30);
        setOtpSent(true)// Restart timer
        // TODO: Add logic to resend OTP
    };
    return (
        <>
            <img src="/Images/logoname.png" alt="" className="h-16 w-40 ml-5" />
            <div className='flex justify-around space-x-20'>
                <form onSubmit={handleSubmit}>
                    <FormControl className='text-left ml-5 space-y-5'>
                        <h1 className='text-xl font-semibold'>Sign Up</h1>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={type_of_org}
                            value={type_of_organization}
                            onChange={handle_type_of_organization}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Type of Organization*"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        width: '380px',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '4px',
                                            padding: '4px 8px',
                                            fontSize: '14px',
                                            backgroundColor: '#fff',
                                            border: '1px solid #616161',
                                        },
                                    }}
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PermIdentityOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                            sx={{
                                width: '330px',
                                '& .MuiAutocomplete-popupIndicator': {
                                    color: '#000',
                                },
                                '& .MuiAutocomplete-input': {
                                    padding: '6px 8px',
                                    fontSize: '14px',
                                },
                            }}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={fpo_types}
                            value={fpo_type}
                            onChange={handle_fpo_type}
                            getOptionLabel={(option) => option.name}
                            isOptionEqualToValue={(option, value) => option.name === value.name}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Type of Fpo*"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                        width: '380px',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '4px',
                                            padding: '4px 8px',
                                            fontSize: '14px',
                                            backgroundColor: '#fff',
                                            border: '1px solid #616161',
                                        },
                                    }}
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PermIdentityOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                            sx={{
                                width: '330px',
                                '& .MuiAutocomplete-popupIndicator': {
                                    color: '#000',
                                },
                                '& .MuiAutocomplete-input': {
                                    padding: '6px 8px',
                                    fontSize: '14px',
                                },
                            }}
                        />
                        <TextField
                            className="p- rounded-xl border type-field"
                            type="text"
                            margin="normal"
                            required
                            fullWidth
                            name="nameofFPO"
                            placeholder="Name of FPO"
                            id="nameofFPO"
                            onChange={(e) => setNameOfFpo(e.target.value)}
                            sx={{
                                width: '380px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '4px',
                                    padding: '4px 8px',
                                    fontSize: '14px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #616161',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <>
                                        <InputAdornment position="start">
                                            <PermIdentityOutlinedIcon />
                                        </InputAdornment>
                                    </>
                                ),
                            }}
                        />
                        <TextField
                            className="p- rounded-xl border type-field"
                            type="tel"
                            margin="normal"
                            required
                            fullWidth
                            name="phone"
                            placeholder="Phone Number"
                            id="phone"
                            autoComplete="current-phone"
                            // onChange={handleMobileChange}
                            onChange={handleMobileCheck}
                            sx={{
                                width: '380px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '4px',
                                    padding: '4px 8px',
                                    fontSize: '14px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #616161',
                                    paddingRight: '0px',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <>
                                        <InputAdornment position="start">
                                            <PhoneIcon />
                                        </InputAdornment>
                                    </>
                                ),
                                endAdornment: (
                                    <>
                                        <InputAdornment position="end" sx={{ marginRight: '-5px' }}>
                                            <button className='bg-[#3fc041] w-20 h-10 font-medium' type='button' onClick={() => {
                                                setOpenOTPPopUP(true);
                                                setOtpSent(true);

                                            }}>Send OTP</button>
                                        </InputAdornment>
                                    </>
                                )
                            }}
                        />
                        {openOTPPopUP && (
                            <div className='fixed top-[-20px] left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50'>
                                <div className='bg-white w-[400px] min-h-[300px] rounded-lg p-5'>
                                    <h1 className='text-xl font-semibold'>Check WhatsApp</h1>
                                    <p>Enter Security code sent to your WhatsApp</p>
                                    <TextField
                                        className="p- rounded-xl border type-field"
                                        type='text'
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="otp"
                                        placeholder="OTP"
                                        id="otp"
                                        autoComplete="current-otp"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: '4px',
                                                padding: '4px 8px',
                                                fontSize: '14px',
                                                backgroundColor: '#fff',
                                                border: '1px solid #616161',
                                            },
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <>
                                                    <InputAdornment position="start">
                                                        <ShieldOutlinedIcon />
                                                    </InputAdornment>
                                                </>
                                            ),
                                        }}
                                    />
                                    <p className='text-sm text-left text-[#606060]'>
                                        Didn't receive the code?{" "}
                                        <button
                                            className={`text-[#3390ff] ${isResendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                                            type='button'
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent form validation error
                                                handleResendOTP();

                                            }}
                                            disabled={isResendDisabled}
                                        >
                                            Resend {isResendDisabled && `(${timer}s)`}
                                        </button>

                                    </p>
                                    <button className='rounded-lg p-2 mt-5 w-[45%] bg-white text-black border-[1px] border-[#616161]' onClick={() => setOpenOTPPopUP(false)}>Cancel</button>
                                    <button className='bg-[#3390ff] text-white rounded-lg p-2 mt-5 w-[45%]' onClick={() => { setOpenOTPPopUP(false); setOtpVerified(true); }}>Verify</button>
                                </div>
                            </div>
                        )}
                        {mobilecheck && (
                            <p className="text-sm text-left text-red-500">{mobilecheck}</p>
                        )}
                        <TextField
                            placeholder="Email*"
                            variant="outlined"
                            type='email'
                            size="small"
                            onChange={handleEmailChange}
                            sx={{
                                width: '380px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '4px',
                                    padding: '4px 8px',
                                    fontSize: '14px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #616161',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            placeholder="Promoter Name*" variant="outlined" type='text' size="small"
                            onChange={(e) => setPromoterName(e.target.value)}
                            sx={{
                                width: '380px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '4px',
                                    padding: '4px 8px',
                                    fontSize: '14px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #616161',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PermIdentityOutlinedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            placeholder="Password*"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            size="small"
                            onChange={handlePasswordChange}
                            sx={{
                                width: '380px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '4px',
                                    padding: '4px 8px',
                                    fontSize: '14px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #616161',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />
                        <TextField
                            placeholder="Confirm Password*"
                            variant="outlined"
                            type={showPassword1 ? 'text' : 'password'}
                            size="small"
                            onChange={handleConfirmPasswordChange}
                            sx={{
                                width: '380px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '4px',
                                    padding: '4px 8px',
                                    fontSize: '14px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #616161',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword1}
                                            onMouseDown={handleMouseDownPassword1}
                                            edge="end"
                                        >
                                            {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />
                        {!passwordsMatch && (
                            <p className="text-sm text-left text-red-500">Passwords do not match.</p>
                        )}
                        <p className='text-sm text-left text-[#606060]'>{message}</p>
                        <button
                            type="submit"
                            className="bg-[#3390ff] text-white w-[380px] rounded-lg p-2"
                        >
                            Sign Up
                        </button>
                        <h1 className='text-center'>Already have an account? <a href="" className='text-[#3390ff]' onClick={() => navigate("/login")}>Log In</a></h1>
                    </FormControl>
                </form>
                <div>
                    <img src="/Images/login_image.png" alt="loading" className='w-[450px]' />
                </div>
            </div >
        </>
    );
};

export default SignUpPage_new;