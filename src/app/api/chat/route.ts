import { chatController } from '@/app/controllers/chat.controller';
import { NextRequest, NextResponse } from 'next/server';

interface RequestBody {
   id?: string;
   message: string;
}

export async function POST(req: NextRequest) {
   const body: RequestBody = await req.json();
   const message = body.message;
   const id = body.id;
   const response = await chatController.sendMessage(message, id);
   console
   return NextResponse.json(response);
}
