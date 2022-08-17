# Note
노트 서비스

# server

JDK 11, gradle 7 버전의 Springboot 프로젝트입니다.

MVC 패턴에 JPA orm을 사용하였습니다.

로컬 빌드 및 테스트에 용이하도록 내장 인메모리 db인 h2db를 사용하였습니다(프로젝트 실행 시 함께 실행, 자동 설치, 브라우저 콘솔 = /h2).

실행 시 로컬 포트는 8080입니다.

entity는 note와 comment이고 일대다 관계로 맵핑되어 있습니다.

두 객체 모두 생성 시 지갑주소를 필드에 저장해 수정/삭제 시 서비스단에서 요청한 유저의 권한을 검증합니다.

주요 api는 다음과 같습니다.

1. getNoteAll(/note/list)

offset, limit을 requestParam으로 요청해 페이지네이션이 적용된 리스트를 반환합니다.

2. getNoteById(/note/{noteId})

noteId를 pathVariable로 요청해 하나의 노트dto를 반환합니다.

3. createNote(/note/creation)

noteRequetDto를 requestBody로 요청하여 새로운 노트를 작성하는 api 입니다.

4. updateNote(/note/update)

noteRequetDto를 requestBody로 요청하여 기존 노트를 수정하는 api 입니다.

5. deleteNote(/note/deletion)

noteRequetDto를 requestBody로 요청하여 기존 노트를 삭제하는 api 입니다.

6. getCommentsByNoteId(/note/{noteId}/comment)

noteId를 pathVariable로 요청해 해당 노트의 자식 관계에 있는 comment 리스트를 반환합니다.

7. createComment(/note/comment/creation)

commentRequetDto를 requestBody로 요청하여 새로운 댓글을 작성하는 api 입니다.

8. updateComment(/note/comment/update)

commentRequetDto를 requestBody로 요청하여 기존 댓글을 수정하는 api 입니다.

9. deleteComment(/note/comment/deletion)

commentRequetDto를 requestBody로 요청하여 기존 댓글을 삭제하는 api 입니다.

# front

node 16 버전, react 17 버전의 웹 프론트엔드 프로젝트입니다.

pages에 라우팅되는 페이지를, components에 해당 페이지에 포함되는 컴포넌트가 있습니다.

connector 및 library에 이더리움 Ropsten 테스트 네트워크를 메타마스크로 연결할 수 있도록 하는 코드를 작성하였고, 크롬 확장 프로그램으로 설치된 메타마스크로 연동 가능합니다.

지갑을 연동하고 웹사이트에 연결하는 것이고 따로 블록체인 상에 기록하는 트랜잭션은 없습니다.

useWeb3React를 활용하여 메타마스크 연결을 체크하고 로드합니다.

실행 시 로컬 포트는 3000입니다.

server 프로젝트와 함께 실행하여 개발환경에서 프록시를 통해 api를 요청하고 데이터를 받아옵니다.

주요 페이지는 다음과 같습니다.

1. Account("")

메인 페이지로 지갑을 연결 혹은 해제합니다. 연결 시 메모를 작성 혹은 메모 리스트를 확인할 수 있는 navbar 컴포넌트를 렌더링합니다.

2. NoteList("note/list")

작성한 메모 리스트를 확인할 수 있습니다. 제목과 작성자가 표시된 형태로 확인되고, 페이지네이션이 가능합니다.

3. NoteCreate(note/creation)

메모를 작성할 수 있습니다. 제목과 내용을 작성합니다.

4. NoteSingle(note/list/:noteId)

메모 상세보기로, 해당 메모를 수정, 삭제할 수 있는 버튼과 함께 해당 메모에 달린 댓글 리스트를 불러옵니다. 이 때 댓글을 수정, 삭제할 수 있는 버튼 역시 불러옵니다.

5. NoteSingle(note/list/:noteId/update)

메모를 수정할 수 있습니다. 제목과 내용을 수정합니다.

6. NoteSingle(note/list/:noteId/comment/:commentId/update)

특정 메모에 달린 특정 댓글을 수정할 수 있습니다. 제목과 내용을 수정합니다.
