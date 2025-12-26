import { Grid, TextField } from "@mui/material";
import CustomInfoBox from "../../../CustomComponents/CustomInfoBox.tsx";
import CustomButton from "../../../CustomComponents/CustomButton.tsx";
import { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (field: string, value: string) => {
		setFormData({ ...formData, [field]: value });
		setErrors({ ...errors, [field]: "" });
	};

	const validate = () => {
		const newErrors: typeof errors = { name: "", email: "", message: "" };
		let valid = true;

		if (!formData.name.trim()) {
			newErrors.name = "Required";
			valid = false;
		}

		if (!formData.email.trim()) {
			newErrors.email = "Required";
			valid = false;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Invalid email address";
			valid = false;
		}

		if (!formData.message.trim()) {
			newErrors.message = "Required";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;

		const form = e.currentTarget as HTMLFormElement;
		form.submit();
	};

	return (
		<CustomInfoBox noValidate component={"form"} data-netlify={"true"} onSubmit={handleSubmit}>
			<Grid container size={12} spacing={3} padding={3}>
				<TextField
					required
					fullWidth
					variant={"outlined"}
					label={"Name"}
					name={"name"}
					autoComplete={"name"}
					value={formData.name}
					onChange={(e) => handleChange("name", e.target.value)}
					error={!!errors.name}
					helperText={errors.name}
				/>
				<TextField
					required
					fullWidth
					variant={"outlined"}
					label={"Email"}
					name={"email"}
					autoComplete={"email"}
					value={formData.email}
					onChange={(e) => handleChange("email", e.target.value)}
					error={!!errors.email}
					helperText={errors.email}
				/>
				<TextField
					required
					fullWidth
					multiline
					rows={6}
					variant={"outlined"}
					label={"Message"}
					name={"message"}
					autoComplete={"off"}
					value={formData.message}
					onChange={(e) => handleChange("message", e.target.value)}
					error={!!errors.message}
					helperText={errors.message}
				/>
				<CustomButton fullWidth type={"submit"} label={"Submit Form"} />
			</Grid>
		</CustomInfoBox>
	);
};

export default ContactForm;
