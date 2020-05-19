package com.codegym.Model;

import javax.persistence.*;


@Entity
@Table(name = "media", schema = "project")
public class MediaEntity {
    private long id;
    private String srcMedia;
    private UserEntity userByUserId;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "srcMedia")
    public String getSrcMedia() {
        return srcMedia;
    }

    public void setSrcMedia(String srcMedia) {
        this.srcMedia = srcMedia;
    }

    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "id", nullable = false)
    public UserEntity getUserByUserId() {
        return userByUserId;
    }

    public void setUserByUserId(UserEntity userByUserId) {
        this.userByUserId = userByUserId;
    }

}
