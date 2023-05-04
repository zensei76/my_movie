import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className='counter-container'>
      <IconButton className='like-button' onClick={() => setLike(like + 1)}>
        <Badge
          badgeContent={like}
          color='primary'
          sx={{
            "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 12 },
          }}
        >
          <ThumbUpAltIcon />
        </Badge>
      </IconButton>

      <IconButton
        className='dislike-button'
        onClick={() => setDisLike(dislike + 1)}
      >
        <Badge
          badgeContent={dislike}
          color='error'
          sx={{
            "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 },
          }}
        >
          <ThumbDownAltIcon />
        </Badge>
      </IconButton>
    </div>
  );
}
