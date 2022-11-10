import { Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { UserDocument } from "../models/Users";
import mongoose from "mongoose";

export interface TokenUser {
  name: string;
  userId: mongoose.Types.ObjectId;
  role: string;
}

const jwt = jsonwebtoken;

const createJWT = ({ payload }: { payload: TokenUser }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_LIFETIME!,
  });
  return token;
};

const isTokenValid = ({ token }: { token: string }) =>
  jwt.verify(token, process.env.JWT_SECRET!);

const attachCookiesToResponse = ({
  res,
  user,
}: {
  res: Response;
  user: TokenUser;
}) => {
  const token = createJWT({ payload: user });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};

export { createJWT, isTokenValid, attachCookiesToResponse };
