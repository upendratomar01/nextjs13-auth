import type { NextRequest, NextResponse } from 'next/server';
type Data ={
    name:string
}

export default function handler(req:NextRequest,res:NextResponse){
    res.status(200).json({name:'testing name'})
}