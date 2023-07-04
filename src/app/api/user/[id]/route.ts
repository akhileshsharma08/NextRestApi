import { NextResponse } from "next/server";

let url = "https://reqres.in/api/users";

//========== getting data of specific id ==========
export async function GET(req: Request, context: any) {
  let id = context.params.id;

  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const res = await response.json();
  return NextResponse.json({ data: res });
}

//============= updating the data ==========
export async function PUT(req: Request, context: any) {
  let id = context.params.id;

  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return NextResponse.json({ data: res });
}

// ========= Delete data =============

export async function DELETE(req: Request, context: any) {
  let id = context.params.id;

  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return NextResponse.json({ message: "user deleted" });
}
