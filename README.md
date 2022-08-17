# Note
노트 서비스

# server

JDK 11, gradle 7버전의 Springboot 프로젝트입니다.

MVC 패턴에 JPA orm을 사용하였습니다.

로컬 빌드 및 테스트에 용이하도록 내장 인메모리 db인 h2db를 사용하였습니다(프로젝트 실행 시 함께 실행, 자동 설치, 브라우저 콘솔 = /h2).

실행 시 로컬 포트는 8080입니다.

entity는 note와 comment이고 일대다 관계로 맵핑되어 있습니다.

주요 api는 다음과 같습니다.

### getNoteAll(/note/list)

offset, limit을 requestParam으로 요청해 페이지네이션이 적용된 리스트를 반환합니다.

### getNoteById(/note/{noteId})

noteId를 pathVariable로 요청해 하나의 노트dto를 반환합니다.

### createNote(/note/creation)

noteRequetDto를 requestBody로 요청하여 새로운 노트를 작성하는 api 입니다.

### updateNote(/note/update)

noteRequetDto를 requestBody로 요청하여 기존 노트를 수정하는 api 입니다.

### deleteNote(/note/deletion)

noteRequetDto를 requestBody로 요청하여 기존 노트를 삭제하는 api 입니다.

### getCommentsByNoteId(/note/{noteId}/comment)

noteId를 pathVariable로 요청해 해당 노트의 자식 관계에 있는 comment 리스트를 반환합니다.

### createComment(/note/comment/creation)

commentRequetDto를 requestBody로 요청하여 새로운 댓글을 작성하는 api 입니다.

### updateComment(/note/comment/update)

commentRequetDto를 requestBody로 요청하여 기존 댓글을 수정하는 api 입니다.

### deleteComment(/note/comment/deletion)

commentRequetDto를 requestBody로 요청하여 기존 댓글을 삭제하는 api 입니다.

# front

