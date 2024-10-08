"use server";

import { ID } from "node-appwrite";
import {
	APPOINTMENT_COLLECTON_ID,
	DATABASE_ID,
	databases,
} from "../appwrite.config";
import { Appointment } from "@/types/appWrite.types";
import { parseStringify } from "../utils";

export const createAppointment = async (
	appointment: CreateAppointmentParams
) => {
	try {
		const newAppointment = await databases.createDocument(
			DATABASE_ID!,
			APPOINTMENT_COLLECTON_ID!,
			ID.unique(),
			appointment
		);

		return parseStringify(newAppointment);
	} catch (error) {
		console.log(error);
	}
};
