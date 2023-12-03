import { NextResponse } from "next/server";
import { connection } from "@/libs/mysql";

// Funcion para llamar los skills que están en la base de datos
export async function GET() {
  try {
    const result = await connection.query("SELECT * FROM skills;");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    }, {
      status: 500,
    });
  }
}