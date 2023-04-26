import { IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    price: number;

    @Min(1)
    @IsInt()
    @IsNotEmpty()
    categoryId: number;
}
