import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getDataFromToken } from '@/helpers/getDataFromToken'

connect()

export async function POST(req: NextRequest) {
    //extract data from token
    const userId = await getDataFromToken(req)
    User.findById({_id: userId}).select("-password")

    //check if no user
    if(!User) {
        return NextResponse.json({message: "User not found"}, {status: 404})
    } else {
        return NextResponse.json({
            message: "User found",
            data: User
            }, {status: 200})
    }
}
