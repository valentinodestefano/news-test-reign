import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class NewsDTO {


@ApiModelProperty({
    description: '',
    example: '',
})
readonly created_at: Date;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly title: string;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly url: string;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly author: string;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly points: string;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly story_text: string;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly comment_text: string;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly num_comments: string;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly story_id: number;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly story_title: string;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly story_url: string;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly parent_id: number;

@ApiModelProperty({
    description: '',
    example: '',
})
readonly created_at_i: number;
}